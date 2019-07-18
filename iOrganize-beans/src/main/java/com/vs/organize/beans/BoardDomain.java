package com.vs.organize.beans;

import java.util.List;

/**
 * Created by Vlad on 18.07.2019.
 */
public class BoardDomain {
  private long id;
  private String name;
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
