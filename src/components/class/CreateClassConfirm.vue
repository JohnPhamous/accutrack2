<template>
  <arc-card type="primary">
    <div slot="header" class="text-center">
      <h1>{{ courseName }} | Section {{ section }}</h1>
    </div>
    
    <div class="py-5">
      <div class="card-block px-2">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 mx-auto">
              <div class="container">

                <arc-data>
                  <span slot="icon" class="fa fa-user"></span>
                  <span slot="header">Course Instructor</span>
                  <span slot="body">
                    <ul style="list-style: none; padding-left: 0;">
                      <li><strong>Name:</strong> {{ name }}</li>
                      <li><strong>Email:</strong> <a :href="`mailto:${email}`">{{ email }}</a></li>
                    </ul>
                  </span>
                </arc-data>

                <arc-data>
                  <span slot="icon" class="fa fa-graduation-cap"></span>
                  <span slot="header">Course Details</span>
                  <span slot="body">
                    <ul style="list-style: none; padding-left: 0;">
                      <li><strong>Location:</strong> {{ location }}</li>
                      <li><strong>Time:</strong> {{ time }}</li>
                      <li><strong>Date:</strong> {{ date }}</li>
                      <li><strong>Number of Students:</strong> {{ 0 }}</li>
                      <li><strong>Notes:</strong> {{ notes }}</li>
                    </ul>
                  </span>
                </arc-data>

                <slot></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </arc-card>
</template>

<script>
import Card from '../Card'
import IconText from '../IconText'

export default {
    components: {
        arcCard: Card,
        arcData: IconText
    },
    props: [
        'name',
        'email',
        'courseName',
        'section',
        'location',
        'date',
        'time',
        'notes'
    ]
}
</script>

<style>

</style>
