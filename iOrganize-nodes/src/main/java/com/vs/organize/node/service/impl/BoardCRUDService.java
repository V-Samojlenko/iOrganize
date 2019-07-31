package com.vs.organize.node.service.impl;

import com.vs.organize.node.database.BoardRepository;
import com.vs.organize.node.domains.BoardDomain;
import com.vs.organize.node.forms.BoardForm;
import com.vs.organize.node.service.CRUDService;
import org.springframework.beans.factory.annotation.Autowired;

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
    return null;
  }

  @Override
  public void delete(long id) {

  }
}
