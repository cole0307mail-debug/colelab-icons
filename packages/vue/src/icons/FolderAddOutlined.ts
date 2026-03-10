// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FolderAddOutlinedSvg from '@colelab/icons-svg/es/asn/FolderAddOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FolderAddOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FolderAddOutlinedSvg }, slots);
  },
});
