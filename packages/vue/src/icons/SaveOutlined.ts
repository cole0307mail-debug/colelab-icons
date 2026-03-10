// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SaveOutlinedSvg from '@colelab/icons-svg/es/asn/SaveOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SaveOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SaveOutlinedSvg }, slots);
  },
});
