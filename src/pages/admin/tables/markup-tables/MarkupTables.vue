<template>
  <div class="markup-tables flex">
    <va-card :title="$t('tables.basic')" class="flex mb-4">
      <va-card-content>
        <div class="table-wrapper">
          <el-table :data="tableData" style="width: 100%" >
            <el-table-column fixed prop="app" label="APP" width="150"  />
            <el-table-column prop="platform" label="Platform" width="120" />
            <el-table-column prop="device" label="Device" width="auto" />
            <el-table-column prop="scene" label="Scene" width="auto" />
            <el-table-column prop="ctime" label="Ctime" width="auto" />
            <el-table-column fixed="right" label="Operations" width="auto">
              <template #default>
                <el-button link type="primary"  @click="handleClick">Analyse</el-button>
                <el-button link type="warning" >Edit</el-button>
                <el-button link type="danger" >Delete</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </va-card-content>
    </va-card>
  </div>
</template>

<script>

export default {
  data () {
    return {
      tableData : [
        {
          app: 'com.bilibili.app.in',
          platform: 'Android',
          device: 'cadj7dj0dnj5(Redmi Note 8)',
          scene: 'apm_2022-04-02-13-47-33',
          ctime: '2022-04-02 13:47:33',
        },
        {
          app: 'com.bilibili.app.in',
          platform: 'Android',
          device: 'cadj7dj0dnj5(Redmi Note 8)',
          scene: 'apm_2022-04-02-13-47-33',
          ctime: '2022-04-02 13:47:33',
        },
        {
          app: 'com.bilibili.app.in',
          platform: 'Android',
          device: 'cadj7dj0dnj5(Redmi Note 8)',
          scene: 'apm_2022-04-02-13-47-33',
          ctime: '2022-04-02 13:47:33',
        },
        {
          app: 'com.bilibili.app.in',
          platform: 'Android',
          device: 'cadj7dj0dnj5(Redmi Note 8)',
          scene: 'apm_2022-04-02-13-47-33',
          ctime: '2022-04-02 13:47:33',
        },
        {
          app: 'com.bilibili.app.in',
          platform: 'Android',
          device: 'cadj7dj0dnj5(Redmi Note 8)',
          scene: 'apm_2022-04-02-13-47-33',
          ctime: '2022-04-02 13:47:33',
        },
        {
          app: 'com.bilibili.app.in',
          platform: 'Android',
          device: 'cadj7dj0dnj5(Redmi Note 8)',
          scene: 'apm_2022-04-02-13-47-33',
          ctime: '2022-04-02 13:47:33',
        },
        {
          app: 'com.bilibili.app.in',
          platform: 'Android',
          device: 'cadj7dj0dnj5(Redmi Note 8)',
          scene: 'apm_2022-04-02-13-47-33',
          ctime: '2022-04-02 13:47:33',
        },
        {
          app: 'com.bilibili.app.in',
          platform: 'Android',
          device: 'cadj7dj0dnj5(Redmi Note 8)',
          scene: 'apm_2022-04-02-13-47-33',
          ctime: '2022-04-02 13:47:33',
        },
        {
          app: 'com.bilibili.app.in',
          platform: 'Android',
          device: 'cadj7dj0dnj5(Redmi Note 8)',
          scene: 'apm_2022-04-02-13-47-33',
          ctime: '2022-04-02 13:47:33',
        },
        {
          app: 'com.bilibili.app.in',
          platform: 'Android',
          device: 'cadj7dj0dnj5(Redmi Note 8)',
          scene: 'apm_2022-04-02-13-47-33',
          ctime: '2022-04-02 13:47:33',
        },
        {
          app: 'com.bilibili.app.in',
          platform: 'Android',
          device: 'cadj7dj0dnj5(Redmi Note 8)',
          scene: 'apm_2022-04-02-13-47-33',
          ctime: '2022-04-02 13:47:33',
        },
        {
          app: 'com.bilibili.app.in',
          platform: 'Android',
          device: 'cadj7dj0dnj5(Redmi Note 8)',
          scene: 'apm_2022-04-02-13-47-33',
          ctime: '2022-04-02 13:47:33',
        },
      ],
    }
  },
  methods: {
    getStatusColor (status) {
      if (status === 'paid') {
        return 'success'
      }

      if (status === 'processing') {
        return 'info'
      }

      return 'danger'
    },
  },
}
</script>

<style lang="scss">
  .markup-tables {
    .table-wrapper {
      overflow: auto;
    }

    .va-table {
      width: 100%;
    }
  }
</style>
