import React from 'react';

export default function Copyright() {
  return (
    <div className="container-fluid copyright py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy; <a className="fw-medium" href="#">Tea House </a>, All Right Reserved.
          </div>
          <div className="col-md-6 text-center text-md-end">
            {/* This template is free as long as you keep the footer author’s credit link/attribution link/backlink. 
            If you'd like to use the template without the footer author’s credit link/attribution link/backlink, 
            you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. */}
            Designed By <a className="fw-medium" href="https://erhanyigiter.com.tr">Erhan Yiğit Er</a>
          </div>
        </div>
      </div>
    </div>
  );
}
