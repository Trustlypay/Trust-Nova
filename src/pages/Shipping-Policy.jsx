import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="margin">
      <p className="heading-1" style={{ marginBottom: "24px" }}>
        Shipping Policy
      </p>
      <p data-start="165" data-end="426">
        This document sets out the shipping policy that applies to customers who
        make a purchase at{" "}
        <a
          data-start="257"
          data-end="305"
          class=""
          rel="noopener"
          href="https://trustnova.shop"
        >
          https://trustnova.shop //TODO - chnage to actual url
        </a>
        . If you have any questions, please contact our customer service team at{" "}
        <strong data-start="378" data-end="398">
          +91-8247 648 184
        </strong>{" "}
        or{" "}
        <strong data-start="402" data-end="425">
          <a
            data-start="404"
            data-end="423"
            class="cursor-pointer"
            rel="noopener"
          >
            info@trustnova.shop
          </a>
        </strong>
        .
      </p>
      <hr data-start="428" data-end="431" />
      <h3 data-start="433" data-end="474">
        <strong data-start="437" data-end="474">
          Shipping Options &amp; Delivery Costs
        </strong>
      </h3>
      <p data-start="476" data-end="576">
        We offer the following shipping options – you will be asked to select a
        shipping method at checkout.
      </p>
      <hr data-start="578" data-end="581" />
      <h3 data-start="583" data-end="626">
        <strong data-start="587" data-end="626">
          Shipping Rates &amp; Delivery Estimates
        </strong>
      </h3>
      <p data-start="628" data-end="705">
        Shipping charges for your order will be calculated and displayed at
        checkout.
      </p>
      <div>
        <div>
          <table class="w-fit min-w-[var(--thread-content-width)] rounded-lg border-separate">
            <thead class="bg-gray-100">
              <tr>
                <th class="px-3 py-2 text-left text-sm font-semibold text-gray-700">
                  Shipment Method
                </th>
                <th class="px-3 py-2 text-left text-sm font-semibold text-gray-700">
                  Estimated Delivery Time
                </th>
                <th class="px-3 py-2 text-left text-sm font-semibold text-gray-700">
                  Shipment Cost
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="hover:bg-gray-50">
                <td class="px-3 py-2 text-sm text-gray-600">
                  Standard Shipping (For Orders Above ₹1,500)
                </td>
                <td class="px-3 py-2 text-sm text-gray-600">
                  5–7 business days
                </td>
                <td class="px-3 py-2 text-sm text-gray-600">Free</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-3 py-2 text-sm text-gray-600">
                  Standard Shipping (For Orders Below ₹1,499)
                </td>
                <td class="px-3 py-2 text-sm text-gray-600">
                  5–7 business days
                </td>
                <td class="px-3 py-2 text-sm text-gray-600">₹100</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-3 py-2 text-sm text-gray-600">
                  Express Shipping
                </td>
                <td class="px-3 py-2 text-sm text-gray-600">
                  1–2 business days
                </td>
                <td class="px-3 py-2 text-sm text-gray-600">₹200</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-3 py-2 text-sm text-gray-600">COD Orders</td>
                <td class="px-3 py-2 text-sm text-gray-600">7 business days</td>
                <td class="px-3 py-2 text-sm text-gray-600">₹200</td>
              </tr>
            </tbody>
          </table>

          <div class="sticky end-(--thread-content-margin) h-0 self-end select-none">
            <div class="absolute end-0 flex items-end">
              <span class="" data-state="closed">
                <button class="hover:bg-token-bg-tertiary text-token-text-secondary my-1 rounded-sm p-1 transition-opacity group-[:not(:hover):not(:focus-within)]:pointer-events-none group-[:not(:hover):not(:focus-within)]:opacity-0">
                  <svg
                    width="20"
                    height="20"
                    viewbox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon"
                  >
                    <path d="M12.668 10.667C12.668 9.95614 12.668 9.46258 12.6367 9.0791C12.6137 8.79732 12.5758 8.60761 12.5244 8.46387L12.4688 8.33399C12.3148 8.03193 12.0803 7.77885 11.793 7.60254L11.666 7.53125C11.508 7.45087 11.2963 7.39395 10.9209 7.36328C10.5374 7.33197 10.0439 7.33203 9.33301 7.33203H6.5C5.78896 7.33203 5.29563 7.33195 4.91211 7.36328C4.63016 7.38632 4.44065 7.42413 4.29688 7.47559L4.16699 7.53125C3.86488 7.68518 3.61186 7.9196 3.43555 8.20703L3.36524 8.33399C3.28478 8.49198 3.22795 8.70352 3.19727 9.0791C3.16595 9.46259 3.16504 9.95611 3.16504 10.667V13.5C3.16504 14.211 3.16593 14.7044 3.19727 15.0879C3.22797 15.4636 3.28473 15.675 3.36524 15.833L3.43555 15.959C3.61186 16.2466 3.86474 16.4807 4.16699 16.6348L4.29688 16.6914C4.44063 16.7428 4.63025 16.7797 4.91211 16.8027C5.29563 16.8341 5.78896 16.835 6.5 16.835H9.33301C10.0439 16.835 10.5374 16.8341 10.9209 16.8027C11.2965 16.772 11.508 16.7152 11.666 16.6348L11.793 16.5645C12.0804 16.3881 12.3148 16.1351 12.4688 15.833L12.5244 15.7031C12.5759 15.5594 12.6137 15.3698 12.6367 15.0879C12.6681 14.7044 12.668 14.211 12.668 13.5V10.667ZM13.998 12.665C14.4528 12.6634 14.8011 12.6602 15.0879 12.6367C15.4635 12.606 15.675 12.5492 15.833 12.4688L15.959 12.3975C16.2466 12.2211 16.4808 11.9682 16.6348 11.666L16.6914 11.5361C16.7428 11.3924 16.7797 11.2026 16.8027 10.9209C16.8341 10.5374 16.835 10.0439 16.835 9.33301V6.5C16.835 5.78896 16.8341 5.29563 16.8027 4.91211C16.7797 4.63025 16.7428 4.44063 16.6914 4.29688L16.6348 4.16699C16.4807 3.86474 16.2466 3.61186 15.959 3.43555L15.833 3.36524C15.675 3.28473 15.4636 3.22797 15.0879 3.19727C14.7044 3.16593 14.211 3.16504 13.5 3.16504H10.667C9.9561 3.16504 9.46259 3.16595 9.0791 3.19727C8.79739 3.22028 8.6076 3.2572 8.46387 3.30859L8.33399 3.36524C8.03176 3.51923 7.77886 3.75343 7.60254 4.04102L7.53125 4.16699C7.4508 4.32498 7.39397 4.53655 7.36328 4.91211C7.33985 5.19893 7.33562 5.54719 7.33399 6.00195H9.33301C10.022 6.00195 10.5791 6.00131 11.0293 6.03809C11.4873 6.07551 11.8937 6.15471 12.2705 6.34668L12.4883 6.46875C12.984 6.7728 13.3878 7.20854 13.6533 7.72949L13.7197 7.87207C13.8642 8.20859 13.9292 8.56974 13.9619 8.9707C13.9987 9.42092 13.998 9.97799 13.998 10.667V12.665ZM18.165 9.33301C18.165 10.022 18.1657 10.5791 18.1289 11.0293C18.0961 11.4302 18.0311 11.7914 17.8867 12.1279L17.8203 12.2705C17.5549 12.7914 17.1509 13.2272 16.6553 13.5313L16.4365 13.6533C16.0599 13.8452 15.6541 13.9245 15.1963 13.9619C14.8593 13.9895 14.4624 13.9935 13.9951 13.9951C13.9935 14.4624 13.9895 14.8593 13.9619 15.1963C13.9292 15.597 13.864 15.9576 13.7197 16.2939L13.6533 16.4365C13.3878 16.9576 12.9841 17.3941 12.4883 17.6982L12.2705 17.8203C11.8937 18.0123 11.4873 18.0915 11.0293 18.1289C10.5791 18.1657 10.022 18.165 9.33301 18.165H6.5C5.81091 18.165 5.25395 18.1657 4.80371 18.1289C4.40306 18.0962 4.04235 18.031 3.70606 17.8867L3.56348 17.8203C3.04244 17.5548 2.60585 17.151 2.30176 16.6553L2.17969 16.4365C1.98788 16.0599 1.90851 15.6541 1.87109 15.1963C1.83431 14.746 1.83496 14.1891 1.83496 13.5V10.667C1.83496 9.978 1.83432 9.42091 1.87109 8.9707C1.90851 8.5127 1.98772 8.10625 2.17969 7.72949L2.30176 7.51172C2.60586 7.0159 3.04236 6.6122 3.56348 6.34668L3.70606 6.28027C4.04237 6.136 4.40303 6.07083 4.80371 6.03809C5.14051 6.01057 5.53708 6.00551 6.00391 6.00391C6.00551 5.53708 6.01057 5.14051 6.03809 4.80371C6.0755 4.34588 6.15483 3.94012 6.34668 3.56348L6.46875 3.34473C6.77282 2.84912 7.20856 2.44514 7.72949 2.17969L7.87207 2.11328C8.20855 1.96886 8.56979 1.90385 8.9707 1.87109C9.42091 1.83432 9.978 1.83496 10.667 1.83496H13.5C14.1891 1.83496 14.746 1.83431 15.1963 1.87109C15.6541 1.90851 16.0599 1.98788 16.4365 2.17969L16.6553 2.30176C17.151 2.60585 17.5548 3.04244 17.8203 3.56348L17.8867 3.70606C18.031 4.04235 18.0962 4.40306 18.1289 4.80371C18.1657 5.25395 18.165 5.81091 18.165 6.5V9.33301Z"></path>
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr data-start="1309" data-end="1312" />
      <h3 data-start="1314" data-end="1343">
        <strong data-start="1318" data-end="1343">
          Order Processing Time
        </strong>
      </h3>
      <p data-start="1345" data-end="1605">
        All orders placed before{" "}
        <strong data-start="1370" data-end="1395">
          2 PM Monday to Friday
        </strong>{" "}
        are processed and dispatched the same day. Orders placed after this time
        will be dispatched the following business day.
        <br data-start="1515" data-end="1518" />
        Orders placed during weekends or public holidays will be shipped the
        next business day.
      </p>
      <hr data-start="1607" data-end="1610" />
      <h3 data-start="1612" data-end="1649">
        <strong data-start="1616" data-end="1649">
          Delivery Address &amp; P.O. Boxes
        </strong>
      </h3>
      <p data-start="1651" data-end="1663">
        Please note:
      </p>
      <ul data-start="1664" data-end="1775">
        <li data-start="1664" data-end="1739">
          <p data-start="1666" data-end="1739">
            We are unable to modify the delivery address once your order is
            placed.
          </p>
        </li>
        <li data-start="1740" data-end="1775">
          <p data-start="1742" data-end="1775">
            We do{" "}
            <strong data-start="1748" data-end="1755">
              not
            </strong>{" "}
            ship to P.O. boxes.
          </p>
        </li>
      </ul>
      <hr data-start="1777" data-end="1780" />
      <h3 data-start="1782" data-end="1810">
        <strong data-start="1786" data-end="1810">
          International Orders
        </strong>
      </h3>
      <p data-start="1812" data-end="2051">
        International packages may be subject to{" "}
        <strong data-start="1853" data-end="1880">
          import duties and taxes
        </strong>
        , which must be paid by the customer.
        <br data-start="1917" data-end="1920" />
        We recommend checking with your local customs office{" "}
        <strong data-start="1973" data-end="2000">
          before placing an order
        </strong>
        , as we are unable to estimate or cover these fees.
      </p>
      <hr data-start="2053" data-end="2056" />
      <h3 data-start="2058" data-end="2085">
        <strong data-start="2062" data-end="2085">
          Tracking Your Order
        </strong>
      </h3>
      <p data-start="2087" data-end="2291">
        Once your order has been dispatched, you will receive a{" "}
        <strong data-start="2143" data-end="2165">
          confirmation email
        </strong>{" "}
        with tracking information.
        <br data-start="2192" data-end="2195" />
        You can track your package directly on the carrier’s website using the
        provided tracking number.
      </p>
      <hr data-start="2293" data-end="2296" />
      <h3 data-start="2298" data-end="2337">
        <strong data-start="2302" data-end="2337">
          Returns, Refunds, and Exchanges
        </strong>
      </h3>
      <p data-start="2339" data-end="2507">
        We want you to be completely satisfied with your purchase.
        <br data-start="2397" data-end="2400" />
        Please refer to our{" "}
        <strong data-start="2420" data-end="2446">
          Return &amp; Refund Policy
        </strong>{" "}
        for detailed information about our processes and guidelines.
      </p>
    </div>
  );
};

export default ShippingPolicy;
