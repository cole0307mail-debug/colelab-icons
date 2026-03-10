// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import KinescopeOutlinedSvg from '@colelab/icons-svg/es/asn/KinescopeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'KinescopeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: KinescopeOutlinedSvg }, slots);
  },
});
