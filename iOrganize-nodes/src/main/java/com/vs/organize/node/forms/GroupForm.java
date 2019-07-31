package com.vs.organize.node.forms;

import com.vs.organize.node.domains.BoardDomain;
import com.vs.organize.node.domains.GroupDomain;

import java.util.List;

/**
 * Created by Vlad on 20.07.2019.
 */
public class GroupForm {
  private String name;
  private long id;
  private List<Long> nodeIds;
  private Long boardId;

  public GroupForm() {
  }

  public GroupForm(List<Long> nodeIds) {
    this.nodeIds = nodeIds;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public List<Long> getNodeIds() {
    return nodeIds;
  }

  public void setNodeIds(List<Long> nodeIds) {
    this.nodeIds = nodeIds;
  }

  public Long getBoardId() {
    return boardId;
  }

  public void setBoardId(Long boardId) {
    this.boardId = boardId;
  }

  public GroupDomain transform() {
    GroupDomain boardDomain = new GroupDomain();
    boardDomain.setName(getName());
    return boardDomain;
  }
}
