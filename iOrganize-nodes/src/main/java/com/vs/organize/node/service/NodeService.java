package com.vs.organize.node.service;

import com.vs.organize.node.database.BoardRepository;
import com.vs.organize.node.database.GroupRepository;
import com.vs.organize.node.database.NodeRepository;
import com.vs.organize.node.domains.BoardDomain;
import com.vs.organize.node.domains.GroupDomain;
import com.vs.organize.node.domains.NodeDomain;
import com.vs.organize.node.forms.GroupForm;
import com.vs.organize.node.forms.NodeForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Component
public class NodeService {
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
    if (boardId != null) {
      return boardRepository.findById(Long.parseLong(boardId)).orElse(null);
    } else {
      return boardRepository.findAll().get(0);
    }
  }

  public GroupDomain updateGroup(GroupForm groupForm) {
    Optional<GroupDomain> byId = groupRepository.findById(groupForm.getId());
    if (byId.isPresent()) {
      GroupDomain groupDomain = byId.get();
      groupDomain.setName(groupForm.getName());
      groupDomain.setNodes(getNodeList(groupDomain.getNodes(), groupForm.getNodeIds()));
    }
    return byId.orElse(null);
  }

  protected List<NodeDomain> getNodeList(List<NodeDomain> existingNodes, List<Long> ids) {
    Map<Long, NodeDomain> lookUp = existingNodes.stream().collect(Collectors.toMap(g -> g.getId(), Function.identity()));
    return ids.stream().map(id -> {
      if (lookUp.containsKey(id)) return lookUp.get(id);
      return nodeRepository.findById(id).orElse(null);
    }).collect(Collectors.toList());
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
