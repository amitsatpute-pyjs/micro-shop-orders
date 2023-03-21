export const apiDoc = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Micro shop orders service",
  },
  paths: {
    "/addorder": {
      post: {
        tags: ["Orders"],
        description: "Create new order",
        parameters: [
          {
            name: "order",
            in: "body",
            description: "Order that we want to create",
            schema: {
              $ref: "#/definitions/OrderBody",
            },
          },
        ],
        produces: ["application/json"],
        responses: {
          "200": {
            description: "New order is created",
            schema: {
              $ref: "#/definitions/AddOrderResponse",
            },
          },
        },
      },
    },
    "/orders": {
      get: {
        tags: ["Orders"],
        summary: "Get all orders ",
        responses: {
          "200": {
            description: "OK",
            schema: {
              $ref: "#/definitions/Orders",
            },
          },
        },
      },
    },
    "/order/{id}": {
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of order that we want to find",
          type: "string",
        },
      ],
      get: {
        summary: "Find order with give ID",
        tags: ["Orders"],
        responses: {
          "200": {
            description: "Record found",
            schema: {
              $ref: "#/definitions/Order",
            },
          },
        },
      },
    },
    "/deleteorder/{id}": {
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of order that we want to delete",
          type: "string",
        },
      ],
      delete: {
        summary: "Delete order with given ID",
        tags: ["Orders"],
        responses: {
          "200": {
            description: "Order deleted",
            schema: {
              $ref: "#/definitions/deleteOrder",
            },
          },
        },
      },
    },
    "/updateorder/{id}": {
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of order that we want to update",
          type: "string",
        },
      ],
      put: {
        summary: "Update order with give ID",
        tags: ["Orders"],
        parameters: [
          {
            name: "order",
            in: "body",
            description: "Order with new values of properties",
            schema: {
              $ref: "#/definitions/OrderBody",
            },
          },
        ],
        responses: {
          "200": {
            description: "Record updated",
            schema: {
              $ref: "#/definitions/AddOrderResponse",
            },
          },
        },
      },
    },
  },
  definitions: {
    Order: {
      required: ["userId", "productIds"],
      properties: {
        userId: {
          type: "string",
        },
        productIds: {
          type: "array",
          items: {
            type: "string",
          },
        },
        totalCost: {
          type: "number",
        },
        createdAt: {
          type: "string",
          format: "date-time",
        },
        updatesdAt: {
          type: "string",
          format: "date-time",
        },
      },
    },
    OrderBody: {
      required: ["userId", "productIds"],
      properties: {
        userId: {
          type: "string",
        },
        productIds: {
          type: "array",
          items: {
            type: "string",
          },
        },
        totalCost: {
          type: "number",
        },
      },
    },
    Orders: {
      properties: {
        message: {
          type: "string",
        },
        data: {
          type: "array",
          items: {
            $ref: "#/definitions/Order",
          },
        },
      },
    },
    AddOrderResponse: {
      properties: {
        message: {
          type: "string",
        },
        data: {
          type: "array",
          items: {
            type: "object",
          },
        },
      },
    },
    deleteOrder: {
      properties: {
        message: {
          type: "string",
        },
        data: {
          properties: {
            orderId: {
              type: "string",
            },
          },
        },
      },
    },
  },
};
