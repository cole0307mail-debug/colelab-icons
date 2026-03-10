// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HashrateOutlinedSvg from '@colelab/icons-svg/es/asn/HashrateOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HashrateOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HashrateOutlinedSvg }, slots);
  },
});
