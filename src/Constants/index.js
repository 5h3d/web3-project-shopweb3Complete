export const abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_customerAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_customerId",
				"type": "uint256"
			}
		],
		"name": "cancelOrder",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_customerAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_customerId",
				"type": "uint256"
			}
		],
		"name": "confirmOrder",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "_productId",
				"type": "uint256[]"
			},
			{
				"internalType": "string[]",
				"name": "_itemName",
				"type": "string[]"
			},
			{
				"internalType": "uint256",
				"name": "_totalAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256[]",
				"name": "_itemAmount",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_productQuantity",
				"type": "uint256[]"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_userAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_city",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "country",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_phoneNumber",
				"type": "string"
			}
		],
		"name": "makePayment",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "notOwner",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "transferFailed",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "productId",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "string[]",
				"name": "productName",
				"type": "string[]"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "enum Shopweb3.OrderState",
				"name": "orderState",
				"type": "uint8"
			}
		],
		"name": "StatusChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "productId",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "string[]",
				"name": "productName",
				"type": "string[]"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "enum Shopweb3.OrderState",
				"name": "orderState",
				"type": "uint8"
			}
		],
		"name": "TransactionEvent",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [],
		"name": "customerTransactions",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "time",
						"type": "uint256"
					},
					{
						"internalType": "uint256[]",
						"name": "productId",
						"type": "uint256[]"
					},
					{
						"internalType": "string[]",
						"name": "productName",
						"type": "string[]"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "uint256[]",
						"name": "itemAmount",
						"type": "uint256[]"
					},
					{
						"internalType": "enum Shopweb3.OrderState",
						"name": "orderState",
						"type": "uint8"
					},
					{
						"internalType": "uint256[]",
						"name": "productQuantity",
						"type": "uint256[]"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "userAddress",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "city",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "country",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "phoneNumber",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "transactionId",
						"type": "uint256"
					}
				],
				"internalType": "struct Shopweb3.CustomerInfo[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllCustomers",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllOrders",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "time",
						"type": "uint256"
					},
					{
						"internalType": "uint256[]",
						"name": "productId",
						"type": "uint256[]"
					},
					{
						"internalType": "string[]",
						"name": "productName",
						"type": "string[]"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "uint256[]",
						"name": "itemAmount",
						"type": "uint256[]"
					},
					{
						"internalType": "enum Shopweb3.OrderState",
						"name": "orderState",
						"type": "uint8"
					},
					{
						"internalType": "uint256[]",
						"name": "productQuantity",
						"type": "uint256[]"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "userAddress",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "city",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "country",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "phoneNumber",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "transactionId",
						"type": "uint256"
					}
				],
				"internalType": "struct Shopweb3.CustomerInfo[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "customerAddress",
				"type": "address"
			}
		],
		"name": "getCustomerCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getLatestPrice",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "isACustomer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export const CONTRACT_ADDRESS = "0x837274Ab2c227F2410a854De87Eb332E63a7AFD3"