import React from 'react'
import Form from './Form'

const AddUser = () => {
  return (
    <main id="site-main">
    <div class="container">
        <div class="box-nav d-flex justify-between">
           <div class="filter">
               <a href="/"><i class="fas fa-angle-double-left"></i> All Users</a>
           </div>
        </div>
        <div class="form-title text-center">
            <h2 class="text-dark">New User</h2>
            <span class="text-light">Use the below form to create a new account</span>
        </div>
          <Form />
    </div>
</main>
  )
}

export default AddUser