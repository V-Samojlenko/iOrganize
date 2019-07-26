package com.vs.organize.node.domains;

import javax.persistence.*;
import java.util.List;

@Entity
public class NodeDomain {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;
  private String title;
  private String text;

  public NodeDomain(String title, String text) {
    this.title = title;
    this.text = text;
  }

  public NodeDomain() {
  }

  public NodeDomain(long id) {
    this.id = id;
  }

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
