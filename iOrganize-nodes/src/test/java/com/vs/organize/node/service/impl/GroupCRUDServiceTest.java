package com.vs.organize.node.service.impl;

import com.vs.organize.node.domains.NodeDomain;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.assertEquals;

public class GroupCRUDServiceTest {
  private GroupCRUDService service;
  private List<NodeDomain> nodes;

  @Before
  public void setUp() throws Exception {
    service = new GroupCRUDService();
    nodes = new ArrayList<>(Arrays.asList(new NodeDomain(1), new NodeDomain(2), new NodeDomain(3)));
    NodeCRUDService nodeCRUDService = Mockito.mock(NodeCRUDService.class);
    Mockito.when(nodeCRUDService.read(Mockito.anyLong())).thenReturn(new NodeDomain(4l));
    service.setNodeService(nodeCRUDService);
  }

  @Test
  public void updateGroup_sort() throws Exception {
    List<NodeDomain> nodeList = service.getNodeList(nodes, Arrays.asList(1l, 3l, 2l));
    assertEquals(3, nodeList.size());
    assertEquals(1l, nodeList.get(0).getId());
    assertEquals(3l, nodeList.get(1).getId());
    assertEquals(2l, nodeList.get(2).getId());
  }

  @Test
  public void updateGroup_delete() throws Exception {
    List<NodeDomain> nodeList = service.getNodeList(nodes, Arrays.asList(1l, 3l));
    assertEquals(2, nodeList.size());
    assertEquals(1l, nodeList.get(0).getId());
    assertEquals(3l, nodeList.get(1).getId());
  }

  @Test
  public void updateGroup_add() throws Exception {
    List<NodeDomain> nodeList = service.getNodeList(nodes, Arrays.asList(1l, 2l, 3l, 4l));
    assertEquals(4, nodeList.size());
    assertEquals(1l, nodeList.get(0).getId());
    assertEquals(2l, nodeList.get(1).getId());
    assertEquals(3l, nodeList.get(2).getId());
    assertEquals(4l, nodeList.get(3).getId());
  }
}