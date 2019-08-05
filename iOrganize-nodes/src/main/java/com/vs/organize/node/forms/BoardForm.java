package com.vs.organize.node.forms;

import com.vs.organize.node.domains.BoardDomain;

import java.util.List;

public class BoardForm {
  private long id;
  private String name;
  private List<Long> groupIds;

  public BoardDomain transform() {
    BoardDomain boardDomain = new BoardDomain();
    boardDomain.setName(name);
    boardDomain.setId(getId());
    return boardDomain;
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

  public List<Long> getGroupIds() {
    return groupIds;
  }

  public void setGroupIds(List<Long> groupIds) {
    this.groupIds = groupIds;
  }
}
