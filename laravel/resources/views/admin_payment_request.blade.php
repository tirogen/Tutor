@extends('layouts.app')

@section('title', 'Admin Panel - Even Die I am The Tutor')

@section('topic', 'Admin Payment Requests')

@section('menu')
<a class="btn ownbtn" href="/admin-panel/">Manage Admin</a>
<a class="btn ownbtn" href="/admin-panel/suspend">Suspend User</a>
<a class="btn ownbtn" href="/admin-panel/reportList">Report List</a>
<a class="btn ownbtn" href="/admin/payment-request">Payment Requests</a>
<a class="btn ownbtn" href="/admin/log/1">Logging System</a>
<a class="btn ownbtn" href="/admin/refund-request">Refund Requests</a>
@endsection

@section('content')
  <div class='row'>
    <div class='col-lg-9'>
      <admin-payment-request></admin-payment-request>
    </div>
  </div>
@endsection
