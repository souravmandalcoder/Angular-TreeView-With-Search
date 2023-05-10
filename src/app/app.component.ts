import { Component } from '@angular/core';
import { FilterExpandSettings } from '@progress/kendo-angular-treeview';

@Component({
    selector: 'my-app',
    template: `
        <kendo-treeview
            kendoTreeViewHierarchyBinding
            [filterable]="true"
            filterInputPlaceholder="Try with 'Furniture'"
            kendoTreeViewExpandable
            [expandOnFilter]="filterExpandSettings"
            [nodes]="data"
            childrenField="items"
            textField="description"
        >
        </kendo-treeview>
    `,
    styles: [`
        kendo-treeview {
            width: 250px;
        }
    `]
})
export class AppComponent {
    public filterExpandSettings: FilterExpandSettings = {
        expandMatches: true
    };

    public data: any[] = [
        {
            "id": 1,
            "tenantGroupName": "Technology",
            "description": "Technology",
            "items": [
                {
                    "id": 2,
                    "tenantGroupName": "javascript",
                    "description": "javascript",
                    "items": null,
                    "parentId": 1,
                    "tenantImage":"/img2.png"
                },
                {
                    "id": 3,
                    "tenantGroupName": "java",
                    "description": "java",
                    "items": null,
                    "parentId": 1,
                    "tenantImage":"/img3.png" 
                },
                {
                    "id": 4,
                    "tenantGroupName": "Django",
                    "description": "Django",
                    "items": null,
                    "parentId": 1,
                    "tenantImage":"/img4.png"   
                },
                {
                    "id": 5,
                    "tenantGroupName": "Django",
                    "description": "Django",
                    "items": null,
                    "parentId": 1,
                    "tenantImage":"/img5.png"   
                }
            ],
            "parentId": 0,
            "tenantImage":"/img1.png"
        },
        {
            "id": 6,
            "tenantGroupName": "Auto",
            "description": "Auto",
            "items": null,
            "parentId": 0,
            "tenantImage":"/img6.png" 
        },
        {
            "id": 7,
            "tenantGroupName": "Consumer and Retail",
            "description": "Consumer and Retail",
            "items": [
                {
                    "id": 8,
                    "tenantGroupName": "ITC",
                    "description": "ITC",
                    "items": null,
                    "parentId": 7,
                    "tenantImage":"/img8.png"
                },
                {
                    "id": 9,
                    "tenantGroupName": "TATA",
                    "description": "TATA",
                    "items": null,
                    "parentId": 7,
                    "tenantImage":"/img9.png" 
                },
                {
                    "id": 10,
                    "tenantGroupName": "Samsung",
                    "description": "Samsung",
                    "items": null,
                    "parentId": 7,
                    "tenantImage":"/img10.png" 
                }
            ],
            "parentId": 0,
            "tenantImage":"/img7.png" 
        },
        {
            "id": 11,
            "tenantGroupName": "Infrastructure",
            "description": "Infrastructure",
            "items": [
                {
                    "id": 12,
                    "tenantGroupName": "Roodel",
                    "description": "Roodel",
                    "items": null,
                    "parentId": 11,
                    "tenantImage":"/img12.png" 
                }
            ],
            "parentId": 0,
            "tenantImage":"/img11.png" 
        },
        {
            "id": 13,
            "tenantGroupName": "Tourism and Travel",
            "description": "Tourism and Travel",
            "items": [
                {
                    "id": 14,
                    "tenantGroupName": "Trilia",
                    "description": "Trilia",
                    "items": null,
                    "parentId": 13,
                    "tenantImage":"/img14.png"
                },
                {
                    "id": 15,
                    "tenantGroupName": "Trivago",
                    "description": "Trivago",
                    "items": null,
                    "parentId": 15,
                    "tenantImage":"/img15.png"
                }
            ],
            "parentId": 0,
            "tenantImage":"/img13.png" 
        },
        {
            "id": 16,
            "tenantGroupName": "Telecom and Media",
            "description": "Telecom and Media",
            "items": [
                {
                    "id": 17,
                    "tenantGroupName": "Bubblemix",
                    "description": "Bubblemix",
                    "items": null,
                    "parentId": 16,
                    "tenantImage":"/img17.png"  
                },
                {
                    "id": 18,
                    "tenantGroupName": "Airtel",
                    "description": "Airtel",
                    "items": null,
                    "parentId": 16,
                    "tenantImage":"/img18.png"   
                }
                
            ],
            "parentId": 0,
            "tenantImage":"/img16.png" 
        },
        {
            "id": 19,
            "tenantGroupName": "Trading and Investment",
            "description": "Trading and Investment",
            "items": [
                {
                    "id": 20,
                    "tenantGroupName": "BSE",
                    "description": "BSE",
                    "items": null,
                    "parentId": 19,
                    "tenantImage":"/img20.png"    
                },
                {
                    "id": 21,
                    "tenantGroupName": "NSE",
                    "description": "NSE",
                    "items": null,
                    "parentId": 19,
                    "tenantImage":"/img21.png"  
                }
            ],
            "parentId": 0,
            "tenantImage":"/img19.png" 
        },
        {
            "id": 22,
            "tenantGroupName": "IT",
            "description": "IT",
            "items": [
                {
                    "id": 23,
                    "tenantGroupName": "TCS",
                    "description": "TCS",
                    "items": null,
                    "parentId": 22,
                    "tenantImage":"/img24.png"
                },
                {
                    "id": 24,
                    "tenantGroupName": "Gurucul",
                    "description": "Gurucul",
                    "items": null,
                    "parentId": 22,
                    "tenantImage":"/img24.png"
                }
            ],
            "parentId": 0,
            "tenantImage":"/img22.png" 
        }
    ];
}
