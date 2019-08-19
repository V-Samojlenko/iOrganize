package com.vs.organize.node.utils;

import com.vs.organize.node.domains.GroupDomain;
import com.vs.organize.node.domains.NodeDomain;
import com.vs.organize.node.forms.GroupForm;

import java.util.ArrayList;
import java.util.stream.Collectors;

public class NodeTransformer {

  public static GroupDomain transform(GroupForm in) {
    GroupDomain out = new GroupDomain();
    out.setName(in.getName());
    return out;
  }

  public static GroupForm transform(GroupDomain in) {
    GroupForm out = new GroupForm();
    out.setName(in.getName());
    out.setId(in.getId());
    out.setNodeIds(new ArrayList<>(in.getNodes().stream().map(NodeDomain::getId).collect(Collectors.toList())));
    return out;
  }

}
