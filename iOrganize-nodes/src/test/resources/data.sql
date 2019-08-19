/* IDs are chosen by 3 numbers f.e. 123
  - 1 = boardId (f.e. 100 = first board)
  - 2 = groupId (f.e. 110 = first group in first board)
  - 3 = nodeId (f.e. 111 = first node in first group in first board)

 */

-- Create nodes
INSERT into node_domain (id,title,text) VALUES
    (111,'title-111','text-111'),
    (112,'title-112','text-112'),
    (113,'title-113','text-113'),
    (121,'title-121','text-121'),
    (122,'title-122','text-122'),
    (123,'title-123','text-123'),
    (211,'title-211','text-211'),
    (212,'title-212','text-212'),
    (221,'title-221','text-221'),
    (222,'title-222','text-222');

-- Create groups
INSERT into group_domain (id,name,placement) VALUES
    (110,'group-110',0),
    (120,'group-120',0),
    (210,'group-210',0),
    (220,'group-220',0);

-- Create board
INSERT into board_domain (id,name) VALUES
    (100,'board-100'),
    (200,'board-200');

-- Join board and group
INSERT into board_domain_groups (board_domain_id,groups_id) VALUES
    (100,110),
    (100,120),
    (200,210),
    (200,220);

-- Join group and node
INSERT into group_domain_nodes (group_domain_id,nodes_id) VALUES
      (110,111),
      (110,112),
      (110,113),
      (120,121),
      (120,122),
      (120,123),
      (210,211),
      (210,212),
      (220,221),
      (220,222);

