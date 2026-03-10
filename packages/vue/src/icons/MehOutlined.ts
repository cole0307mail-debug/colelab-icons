// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MehOutlinedSvg from '@colelab/icons-svg/es/asn/MehOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MehOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MehOutlinedSvg }, slots);
  },
});
