package com.vs.organize.beans;

/**
 * Created by Vlad on 18.07.2019.
 */
public class NodeDomain {
  private long id;
  private String title;
  private String text;

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
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
}
