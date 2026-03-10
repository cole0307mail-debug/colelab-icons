// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FolderOutlinedSvg from '@colelab/icons-svg/es/asn/FolderOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FolderOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FolderOutlinedSvg }, slots);
  },
});
