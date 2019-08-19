package com.vs.organize.node.service.impl;

import com.vs.organize.node.database.BoardRepository;
import com.vs.organize.node.database.GroupRepository;
import com.vs.organize.node.database.NodeRepository;
import com.vs.organize.node.domains.BoardDomain;
import com.vs.organize.node.domains.GroupDomain;
import com.vs.organize.node.domains.NodeDomain;
import com.vs.organize.node.forms.NodeForm;
import com.vs.organize.node.service.CRUDService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class NodeCRUDService implements CRUDService<NodeDomain, NodeForm> {
  @Autowired
  private BoardRepository boardRepository;
  @Autowired
  private GroupRepository groupRepository;
  @Autowired
  private NodeRepository nodeRepository;

  /**
   * look for board and group in which node should be placed.
   *
   * @param form
   * @return
   */
  public NodeDomain create(NodeForm form) {
    GroupDomain groupDomain = groupRepository.findById(form.getGroupId()).orElseGet(null);
    if (groupDomain != null) {
      //TODO We have to find and set user
      NodeDomain transform = form.transform();
      groupDomain.getNodes().add(transform);
      nodeRepository.save(transform);
      groupRepository.save(groupDomain);
      return transform;
    }
    return null;
  }

  @Override
  public NodeDomain read(long id) {
    return nodeRepository.findById(id).orElse(null);
  }

  @Override
  public NodeDomain update(NodeForm form) {
    NodeDomain transform = form.transform();
    return nodeRepository.save(transform);
  }

  public void delete(long id) {
    NodeDomain nodeDomain = nodeRepository.findById(id).orElse(null);
    if (nodeDomain != null) {
      GroupDomain byNodesContaining = groupRepository.findByNodesContaining(nodeDomain);
      if (byNodesContaining != null) {
        byNodesContaining.getNodes().remove(nodeDomain);
        groupRepository.save(byNodesContaining);
      }
      nodeRepository.delete(nodeDomain);
    }
  }

  public BoardDomain getBoard(long boardId) {
    return boardRepository.findById(boardId).orElse(null);
  }


  public void setBoardRepository(BoardRepository boardRepository) {
    this.boardRepository = boardRepository;
  }

  public void setGroupRepository(GroupRepository groupRepository) {
    this.groupRepository = groupRepository;
  }

  public void setNodeRepository(NodeRepository nodeRepository) {
    this.nodeRepository = nodeRepository;
  }
}
