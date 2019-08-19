package com.vs.organize.node.domains;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import javax.persistence.*;
import java.util.List;

@Entity
public class BoardDomain {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;
  private String name;
  @OneToMany
  @Cascade(CascadeType.ALL)
  private List<GroupDomain> groups;

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

  public List<GroupDomain> getGroups() {
    return groups;
  }

  public void setGroups(List<GroupDomain> groups) {
    this.groups = groups;
  }
}
