<template>
  <div>
    <template>
      <el-table
        :data="tableData"
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
          prop="tel"
          label="电话">
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column
          prop="creatDate"
          label="创建时间">
        </el-table-column>
      </el-table>
      <el-pagination
        align="left"
        background
        layout="prev, pager, next"
        :page-size="pageSize"
        :total="totals"
        :current-page="currentPage"
        @current-change="pageChange">
      </el-pagination>
    </template>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      pageSize: 5,
      totals: 0,
      currentPage: 1,
      tableData: []
    }
  },
  methods: {
    pageChange(curr) {
      this.currentPage = curr,
        this.getData()
    },
    getData() {
      let param = {"currentPage": this.currentPage, "pageSize": this.pageSize}
      this.$http.post("/user/user", param)
        .then(result => {
          this.tableData = result.data.data;
          this.totals = result.data.totals;
        })
        .catch(result => {
          alert("网络异常，请稍后再试")
        })
    }
  },
  mounted() {
    this.getData();
  }
}
</script>
