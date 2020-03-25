import { Component, OnInit } from "@angular/core";
import { FlatTreeControl } from "@angular/cdk/tree";
import { Injectable } from "@angular/core";
import {
  MatTreeFlatDataSource,
  MatTreeFlattener
} from "@angular/material/tree";
import { BehaviorSubject, Observable } from "rxjs";
import { DashboardService } from "../dashboard.service";

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: "JS.io",
    children: [
      {
        name: "Employee",
        children: [
          {
            name:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatum aperiam sunt, perferendis nihil quia ullam aut illum iste laudantium eos facilis eveniet molestiae hic quo repellat earum exercitationem delectus?"
          },
          {
            name:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatum aperiam sunt, perferendis nihil quia ullam aut illum iste laudantium eos facilis eveniet molestiae hic quo repellat earum exercitationem delectus?"
          }
        ]
      },
      {
        name: "Departamens",
        children: [
          {
            name:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatum aperiam sunt, perferendis nihil quia ullam aut illum iste laudantium eos facilis eveniet molestiae hic quo repellat earum exercitationem delectus?"
          },
          {
            name:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatum aperiam sunt, perferendis nihil quia ullam aut illum iste laudantium eos facilis eveniet molestiae hic quo repellat earum exercitationem delectus?"
          }
        ]
      }
    ]
  },
  {
    name: "Externals",
    children: [
      {
        name: "Suppliers",
        children: [
          {
            name:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatum aperiam sunt, perferendis nihil quia ullam aut illum iste laudantium eos facilis eveniet molestiae hic quo repellat earum exercitationem delectus?"
          },
          {
            name:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatum aperiam sunt, perferendis nihil quia ullam aut illum iste laudantium eos facilis eveniet molestiae hic quo repellat earum exercitationem delectus?"
          }
        ]
      },
      {
        name: "Customers",
        children: [
          {
            name:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatum aperiam sunt, perferendis nihil quia ullam aut illum iste laudantium eos facilis eveniet molestiae hic quo repellat earum exercitationem delectus?"
          },
          {
            name:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatum aperiam sunt, perferendis nihil quia ullam aut illum iste laudantium eos facilis eveniet molestiae hic quo repellat earum exercitationem delectus?"
          }
        ]
      }
    ]
  },
  {
    name: "interface",
    children: [
      {
        name: "New employee",
        children: [{ name: "section" }, { name: "section" }]
      },
      {
        name: "expandable",
        children: [{ name: "section" }, { name: "section" }]
      }
    ]
  },
  {
    name: "others",
    children: [
      {
        name: "New employee",
        children: [{ name: "section" }, { name: "section" }]
      },
      {
        name: "Object",
        children: [{ name: "section" }, { name: "section" }]
      }
    ]
  },
  {
    name: "specify",
    children: [
      {
        name: "New employee",
        children: [{ name: "section" }, { name: "section" }]
      },
      {
        name: "Type",
        children: [{ name: "section" }, { name: "section" }]
      }
    ]
  },
  {
    name: "FoodNode",
    children: [
      {
        name: "New employee",
        children: [{ name: "section" }, { name: "section" }]
      },
      {
        name: "properties",
        children: [{ name: "section" }, { name: "section" }]
      }
    ]
  },
  {
    name: "Either",
    children: [
      {
        name: "New employee",
        children: [{ name: "section" }, { name: "section" }]
      },
      {
        name: "Property",
        children: [{ name: "section" }, { name: "section" }]
      }
    ]
  },
  {
    name: "Compiled",
    children: [
      {
        name: "New employee",
        children: [{ name: "section" }, { name: "section" }]
      },
      {
        name: "Time",
        children: [{ name: "section" }, { name: "section" }]
      }
    ]
  },
  {
    name: "rendered",
    children: [
      {
        name: "New employee",
        children: [{ name: "section" }, { name: "section" }]
      },
      {
        name: "initial",
        children: [{ name: "section" }, { name: "section" }]
      }
    ]
  },
  {
    name: "Example",
    children: [
      {
        name: "New employee",
        children: [{ name: "section" }, { name: "section" }]
      },
      {
        name: "FlatNode",
        children: [{ name: "section" }, { name: "section" }]
      }
    ]
  },
  {
    name: "chunks",
    children: [
      {
        name: "New employee",
        children: [{ name: "section" }, { name: "section" }]
      },
      {
        name: "main",
        children: [{ name: "section" }, { name: "section" }]
      }
    ]
  }
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: "app-help",
  templateUrl: "./help.component.html",
  styleUrls: ["./help.component.scss"]
})
export class HelpComponent implements OnInit {
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {}
}
