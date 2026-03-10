// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FolderOpenOutlinedSvg from '@colelab/icons-svg/es/asn/FolderOpenOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FolderOpenOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FolderOpenOutlinedSvg }, slots);
  },
});
