<template>
  <div>
    <template>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="id"
          label="编号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="电话"
          width="180">
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="180">
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="创建时间">
        </el-table-column>
      </el-table>
      <el-pagination
        align="left"
        background
        layout="prev, pager, next"
        :total="totals"
        :current-page="currentPage"
        :page-size="pageSize"
        @current-change="gotoPage">
      </el-pagination>
    </template>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data() {
    return {
      totals: 0,
      currentPage: 1,
      pageSize: 5,
      tableData: []
    }
  },
  methods: {
    gotoPage(curr){
      // curr代表着是当前页 点了哪个页码就是哪个
      //   console.log(curr)
      // 将新的 页码 给到data函数中的currentPage
      this.currentPage = curr;
      // 调用列表查询
      this.getData();
    },
    getData(){
      let param = {"currentPage":this.currentPage,"pageSize":this.pageSize}
      this.$http.post("/user/list",param)
        .then(result=>{
          this.tableData = result.data.data;
          this.totals = result.data.totals;
        })
        .catch(result=>{
          alert("网络异常，请稍后再试")
        })
    }
  },mounted() {
    this.getData();
  }
}
</script>
