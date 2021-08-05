document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);
  xhr.onload = function () {
    if (this.status = 200) {
      // console.log(this.responseText);
      const customer = JSON.parse(this.responseText)
      const output = `
      <ul>
        <li>Name: ${customer.firstName} ${customer.lastName}</li>
        <li>Happiness: ${customer.company.happiness}/10</li>
        <li>Company: ${customer.company.name}</li>
        <li>ID: ${customer.company.id}</li>
      </ul
      `

      document.getElementById('customer').innerHTML = output;
    }
  }
  xhr.send()
}

function loadCustomers() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);
  xhr.onload = function () {
    if (this.status = 200) {
      const customers = JSON.parse(this.responseText)
      let output = '';
      customers.forEach(customer => {
        output += `
          <ul>
            <li>First Name: ${customer.firstName}</li>
            <li>Last Name: ${customer.lastName}</li>
            <li>ID: ${customer.id}</li>
          </ul>
          `;
      });
      document.getElementById('customers').innerHTML = output;
    }
  }
  xhr.send()
}

// Ready State Values:
// 0: Request init
// 1: Server connection established
// 2: Request recieved
// 3: Processing request
// 4: Request finished & response ready.

// HTTP Statuses:
// 200 "OK"
// 404 "Not Found"
// 403 "Forbidden" (Access )