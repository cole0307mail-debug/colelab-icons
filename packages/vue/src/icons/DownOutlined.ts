// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DownOutlinedSvg from '@colelab/icons-svg/es/asn/DownOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DownOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DownOutlinedSvg }, slots);
  },
});
