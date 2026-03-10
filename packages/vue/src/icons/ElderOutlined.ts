// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ElderOutlinedSvg from '@colelab/icons-svg/es/asn/ElderOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ElderOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ElderOutlinedSvg }, slots);
  },
});
