package com.vs.organize.node.service.impl;

import com.vs.organize.node.database.BoardRepository;
import com.vs.organize.node.domains.BoardDomain;
import com.vs.organize.node.domains.GroupDomain;
import com.vs.organize.node.forms.BoardForm;
import com.vs.organize.node.service.CRUDService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Component
public class BoardCRUDService implements CRUDService<BoardDomain, BoardForm> {
  @Autowired
  private BoardRepository boardRepository;

  @Override
  public BoardDomain create(BoardForm form) {
    return null;
  }

  @Override
  public BoardDomain read(long id) {
    return boardRepository.findById(id).orElse(null);
  }

  @Override
  public BoardDomain update(BoardForm form) {
    BoardDomain board = read(form.getId());
    if (board != null) {
      board.setName(form.getName());
      Map<Long, GroupDomain> collect = board.getGroups().stream().collect(Collectors.toMap(GroupDomain::getId, Function.identity()));
      List<GroupDomain> newGroupOrder = form.getGroupIds().stream().filter(collect::containsKey).map(collect::get).collect(Collectors.toList());
      board.setGroups(newGroupOrder);
      boardRepository.save(board);
      return board;
    }
    return null;
  }

  @Override
  public void delete(long id) {

  }
}
