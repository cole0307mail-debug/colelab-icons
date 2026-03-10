// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DownCircleOutlinedSvg from '@colelab/icons-svg/es/asn/DownCircleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DownCircleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DownCircleOutlinedSvg }, slots);
  },
});
