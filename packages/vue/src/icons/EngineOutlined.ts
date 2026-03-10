// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import EngineOutlinedSvg from '@colelab/icons-svg/es/asn/EngineOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'EngineOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: EngineOutlinedSvg }, slots);
  },
});
