var bookshelf = [
    {
      isbn: '978-1491929483',
      title: 'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
      author: 'Lindsay Bassett'
    },
    {
      isbn: '978-1484218624',
      title: 'JSON Quick Syntax Reference',
      author: 'Wallace Jackson'
    },
    {
      isbn: '978-0692232699',
      title: 'Build APIs You Won\'t Hate: Everyone and their dog wants an API, so you should probably learn how to build them',
      author: 'Phil Sturgeon & Laura Bohill'
    }
  ];
  console.log('The Name of the second author: ', bookshelf[1].author);

  var orderHistory = [
    {
        orderPlaced: {
            month: 'August',
            day: 8,
            year: 2020
        },
        total: '$34.30',
        shipTo: 'HS Kim',
        orderNumber: '114-39458624-452485',
        deliveredDate: {
            month: 'August',
            day: 8,
            year: 2020
        },
        item: [
            {
                title: 'JavaScript for impatient programmers',
                author: 'Rauschmayer, Dr. Axel',
                returnBy: {
                    month: 'September',
                    day: 7,
                    year: 2020
                 },
                priceWithoutTax: '$31.55' 
            }
        ]
    }
  ];

  console.log(orderHistory);