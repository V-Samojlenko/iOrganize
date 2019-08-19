package com.vs.organize.node.domains;


import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import javax.persistence.*;
import java.util.List;

@Entity
public class GroupDomain {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;
  private String style;
  private int placement;
  @OneToMany
  @Cascade(CascadeType.ALL)
  private List<NodeDomain> nodes;
  private String name = "New group";

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
