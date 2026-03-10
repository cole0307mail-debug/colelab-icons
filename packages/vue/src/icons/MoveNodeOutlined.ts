// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MoveNodeOutlinedSvg from '@colelab/icons-svg/es/asn/MoveNodeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MoveNodeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MoveNodeOutlinedSvg }, slots);
  },
});
