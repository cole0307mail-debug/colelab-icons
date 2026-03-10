// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DatabaseOutlinedSvg from '@colelab/icons-svg/es/asn/DatabaseOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DatabaseOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DatabaseOutlinedSvg }, slots);
  },
});
