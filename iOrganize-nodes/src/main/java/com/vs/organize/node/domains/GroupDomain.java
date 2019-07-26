package com.vs.organize.node.domains;

import org.hibernate.annotations.*;

import javax.persistence.*;
import javax.persistence.Entity;
import java.util.List;
import java.util.stream.Collectors;

@Entity
public class GroupDomain {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;
  private String style;
  private int placement;
  private int width;
  @OneToMany
  @Cascade(org.hibernate.annotations.CascadeType.ALL)
  private List<NodeDomain> nodes;
  private String name;

  public GroupDomain(List<NodeDomain> nodes) {
    this.nodes = nodes;
  }

  public GroupDomain() {
  }

  public String getStyle() {
    return style;
  }

  public void setStyle(String style) {
    this.style = style;
  }

  public int getPlacement() {
    return placement;
  }

  public void setPlacement(int placement) {
    this.placement = placement;
  }

  public int getWidth() {
    return width;
  }

  public void setWidth(int width) {
    this.width = width;
  }

  public List<NodeDomain> getNodes() {
    return nodes;
  }

  public void setNodes(List<NodeDomain> nodes) {
    this.nodes = nodes;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }
}
