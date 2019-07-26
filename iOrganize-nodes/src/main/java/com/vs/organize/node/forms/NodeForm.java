package com.vs.organize.node.forms;


import com.vs.organize.node.domains.NodeDomain;

public class NodeForm {
  private long boardId;
  private long groupId;
  private long userId;

  private String title;
  private String text;

  public long getBoardId() {
    return boardId;
  }

  public void setBoardId(long boardId) {
    this.boardId = boardId;
  }

  public long getGroupId() {
    return groupId;
  }

  public void setGroupId(long groupId) {
    this.groupId = groupId;
  }

  public long getUserId() {
    return userId;
  }

  public void setUserId(long userId) {
    this.userId = userId;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }

  public NodeDomain transform() {
    NodeDomain nodeDomain = new NodeDomain();
    nodeDomain.setText(getText());
    nodeDomain.setTitle(getTitle());
    return nodeDomain;
  }
}
