// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileTimeOutlinedSvg from '@colelab/icons-svg/es/asn/FileTimeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileTimeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileTimeOutlinedSvg }, slots);
  },
});
