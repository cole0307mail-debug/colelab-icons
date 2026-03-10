// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileTempOutlinedSvg from '@colelab/icons-svg/es/asn/FileTempOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileTempOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileTempOutlinedSvg }, slots);
  },
});
