// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileInfoCircleOutlinedSvg from '@colelab/icons-svg/es/asn/FileInfoCircleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileInfoCircleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileInfoCircleOutlinedSvg }, slots);
  },
});
