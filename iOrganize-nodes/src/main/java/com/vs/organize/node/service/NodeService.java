package com.vs.organize.node.service;

import com.vs.organize.node.database.BoardRepository;
import com.vs.organize.node.domains.BoardDomain;
import com.vs.organize.node.domains.GroupDomain;
import com.vs.organize.node.domains.NodeDomain;
import com.vs.organize.node.forms.NodeForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class NodeService {
  @Autowired
  private BoardRepository boardRepository;

  /**
   * look for board and group in which node should be placed.
   *
   * @param form
   * @return
   */
  public NodeDomain create(NodeForm form) {
    BoardDomain boardDomain = boardRepository.findById(form.getBoardId()).orElseGet(null);
    if (boardDomain != null && !boardDomain.getGroups().isEmpty()) {
      //TODO Maybe just get group?
      GroupDomain groupDomain = boardDomain.getGroups().stream().filter(g -> g.getId() == form.getBoardId()).findAny().orElse(null);
      if (groupDomain != null) {
        //TODO We have to find and set user
        NodeDomain transform = form.transform();
        groupDomain.getNodes().add(transform);
        boardRepository.save(boardDomain);
        return transform;
      }
    }
    return null;
  }

  public BoardDomain getBoard(String boardId) {
    if(boardId != null){
      return boardRepository.findById(Long.parseLong(boardId)).orElse(null);
    }else{
      return boardRepository.findById(0l).orElse(null);
    }
  }
}
