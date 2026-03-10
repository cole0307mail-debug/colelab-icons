# Icon Overview (Vue)

> Aligned with React docs structure: grouped examples + live rendering + code snippets.

<script setup lang="ts">
import {
  AccountBookOutlined,
  AccountBookFilled,
  AccountBookTwoTone,
  LoadingOutlined,
  SettingOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  InfoCircleOutlined,
  setTwoToneColor,
} from '@colelab/icons-vue';

setTwoToneColor(['#1677ff', '#e6f4ff']);
</script>

## Basic Preview

<div style="display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:20px;align-items:center;">
  <div style="text-align:center"><AccountBookOutlined style="font-size:28px" /><div style="font-size:12px;margin-top:8px">AccountBookOutlined</div></div>
  <div style="text-align:center"><AccountBookFilled style="font-size:28px" /><div style="font-size:12px;margin-top:8px">AccountBookFilled</div></div>
  <div style="text-align:center"><AccountBookTwoTone style="font-size:28px" /><div style="font-size:12px;margin-top:8px">AccountBookTwoTone</div></div>
  <div style="text-align:center"><SettingOutlined style="font-size:28px" /><div style="font-size:12px;margin-top:8px">SettingOutlined</div></div>
  <div style="text-align:center"><CheckCircleOutlined style="font-size:28px" /><div style="font-size:12px;margin-top:8px">CheckCircleOutlined</div></div>
  <div style="text-align:center"><InfoCircleOutlined style="font-size:28px" /><div style="font-size:12px;margin-top:8px">InfoCircleOutlined</div></div>
</div>

## Interaction (spin / rotate)

<div style="display:flex;gap:16px;align-items:center;">
  <LoadingOutlined :spin="true" style="font-size:24px" />
  <LoadingOutlined :rotate="90" style="font-size:24px" />
  <CloseCircleOutlined style="font-size:24px" />
</div>
