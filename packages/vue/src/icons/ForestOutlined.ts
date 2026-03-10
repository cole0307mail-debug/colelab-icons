// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ForestOutlinedSvg from '@colelab/icons-svg/es/asn/ForestOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ForestOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ForestOutlinedSvg }, slots);
  },
});
