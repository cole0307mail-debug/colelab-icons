// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FolderViewOutlinedSvg from '@colelab/icons-svg/es/asn/FolderViewOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FolderViewOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FolderViewOutlinedSvg }, slots);
  },
});
