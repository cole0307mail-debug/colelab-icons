// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LaserRangefinderOutlinedSvg from '@colelab/icons-svg/es/asn/LaserRangefinderOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LaserRangefinderOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LaserRangefinderOutlinedSvg }, slots);
  },
});
