// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MoreOutlinedSvg from '@colelab/icons-svg/es/asn/MoreOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MoreOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MoreOutlinedSvg }, slots);
  },
});
