package com.vs.organize.beans;

import java.util.List;

/**
 * Created by Vlad on 18.07.2019.
 */
public class GroupDomain {
  private long id;
  private String style;
  private int placement;
  private int width;
  private List<NodeDomain> nodes;

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
}
