package com.vs.organize.node.service.impl;

import com.vs.organize.node.database.BoardRepository;
import com.vs.organize.node.database.GroupRepository;
import com.vs.organize.node.domains.BoardDomain;
import com.vs.organize.node.domains.GroupDomain;
import com.vs.organize.node.domains.NodeDomain;
import com.vs.organize.node.forms.GroupForm;
import com.vs.organize.node.service.CRUDService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

public class GroupCRUDService implements CRUDService<GroupDomain, GroupForm> {
  @Autowired
  private BoardRepository boardRepository;
  @Autowired
  private GroupRepository groupRepository;
  @Autowired
  private NodeCRUDService nodeService;

  @Override
  public GroupDomain create(GroupForm form) {
    BoardDomain boardDomain = boardRepository.findById(form.getBoardId()).orElse(null);
    if (boardDomain != null) {
      GroupDomain groupDomain = form.transform();
      groupDomain = groupRepository.save(groupDomain);
      boardDomain.getGroups().add(groupDomain);
      boardRepository.save(boardDomain);
      return groupDomain;
    }
    return null;
  }

  @Override
  public GroupDomain read(long id) {
    return groupRepository.findById(id).orElse(null);
  }

  @Override
  public GroupDomain update(GroupForm groupForm) {
    Optional<GroupDomain> byId = groupRepository.findById(groupForm.getId());
    if (byId.isPresent()) {
      GroupDomain groupDomain = byId.get();
      if (groupForm.getName() != null) {
        groupDomain.setName(groupForm.getName());
      }
      groupDomain.setNodes(getNodeList(groupDomain.getNodes(), groupForm.getNodeIds()));
      groupRepository.save(groupDomain);
    }
    return byId.orElse(null);
  }

  protected List<NodeDomain> getNodeList(List<NodeDomain> existingNodes, List<Long> ids) {
    Map<Long, NodeDomain> lookUp = existingNodes.stream().collect(Collectors.toMap(g -> g.getId(), Function.identity()));
    return ids.stream().map(id -> {
      if (lookUp.containsKey(id)) return lookUp.get(id);
      return nodeService.read(id);
    }).collect(Collectors.toList());
  }

  @Override
  public void delete(long id) {
    groupRepository.deleteById(id);
  }

  public void setNodeService(NodeCRUDService nodeService) {
    this.nodeService = nodeService;
  }
}
